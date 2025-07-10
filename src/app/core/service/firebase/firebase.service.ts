import { inject, Injectable } from '@angular/core';
import {
  getMessaging,
  getToken,
  Messaging,
  onMessage,
} from 'firebase/messaging';
import { UserDeviceTokenService } from '../UserDeviceToken/user-device-token.service';
import {
  Devicetype,
  UserDeviceToken,
} from '../UserDeviceToken/UserDeviceToken';
import { Utility } from '../../helper/utility';
import { SessionService } from '../Session/session.service';
import { FirebaseConfig } from '../../interface/firebase-config';
import { FirebaseConfigService } from './firebase-config.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  messaging: Messaging;
  deviceToken: UserDeviceToken;
  firebaseConfig: FirebaseConfig;

  _userDeviceTokenService = inject(UserDeviceTokenService);
  _sessionService = inject(SessionService);
  _firebaseConfigService = inject(FirebaseConfigService);

  constructor() {
    this.subscribeToFirebaseConfig();
  }

  /**
   * Initialize Firebase Cloud Messaging
   */
  async initializeFCM(): Promise<void> {
    try {
      this.messaging = getMessaging();
      this.subscribeToPermissionChanges();
      await this.requestPermission();
      this.listenForMessages();
    } catch (error) {
      console.error('Error initializing FCM:', error);
    }
  }

  subscribeToFirebaseConfig() {
    this._firebaseConfigService.configState.subscribe((config) => {
      if (config) {
        this.firebaseConfig = config;
      }
    });
  }

  /**
   * Listen for real-time messages from FCM
   */
  private listenForMessages(): void {
    onMessage(this.messaging, (payload) => {
      const { title, body } = payload.notification!;
      new Notification(title, { body });
    });
  }

  /**
   * Request notification permissions from the user
   */
  private async requestPermission(): Promise<void> {
    try {
      if (Notification.permission == 'granted') {
        await this.getDeviceToken();
      } else {
        await Notification.requestPermission();
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  }

  /**
   * Subscribe to changes in notification permissions
   */
  private subscribeToPermissionChanges(): void {
    navigator.permissions
      .query({ name: 'notifications' })
      .then((permissionStatus) => {
        permissionStatus.onchange = async () => {
          if (permissionStatus.state == 'prompt') {
            await this.deleteDeviceToken();
            this._sessionService.removeDeviceToken();
          }
          if (permissionStatus.state === 'granted') {
            await this.getDeviceToken();
          }
        };
      })
      .catch((error) => {
        console.error('Error subscribing to permission changes:', error);
      });
  }

  /**
   * Get the FCM device token
   */
  private async getDeviceToken(): Promise<void> {
    try {
      const token = await getToken(this.messaging, {
        vapidKey: this.firebaseConfig.vapidKey,
      });

      if (token) {
        const oldToken = this._sessionService.getDeviceToken();
        if (oldToken == token) {
          return;
        }
        this._sessionService.setDeviceToken(token);
        this.createOrUpdateDeviceToken(token);
      }
    } catch (error) {
      console.error('Error retrieving device token:', error);
    }
  }

  /**
   * Create or update the device token in the backend
   */
  private createOrUpdateDeviceToken(token: string): void {
    this.deviceToken = {
      UserId: '00000000-0000-0000-0000-000000000000',
      DeviceToken: token,
      Devicetype: Devicetype.Windows,
      Uid: Utility.getGuidAsZero,
      IsDelete: false,
      CreatedBy: Utility.getGuidAsZero,
      CreatedOn: null,
      UpdatedBy: null,
      UpdatedOn: null,
      DeletedBy: null,
      DeletedOn: null,
    };

    this._userDeviceTokenService.create(this.deviceToken).subscribe({
      next: () => {
        console.log('Device token saved successfully.');
      },
      error: (error) => {
        console.error('Error saving device token:', error);
      },
    });
  }

  /**
   * delete old token if browser reset permission
   */
  deleteDeviceToken() {
    return new Promise<void>((resolve, reject) => {
      const token = this._sessionService.getDeviceToken();
      if (!token) {
        resolve();
      }
      this._userDeviceTokenService.update(token).subscribe({
        next: () => {
          resolve();
        },
        error: (error) => {
          console.error('Error saving device token:', error);
          reject();
        },
      });
    });
  }
}
