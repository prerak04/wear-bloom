import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { Utility } from "../../helper/utility";
import { KwButtonModule } from "../../kw-library/kw-button/kw-button.module";
import { KwFormFieldModule } from "../../kw-library/kw-form-field/kw-form-field.module";
import { KwInputsModule } from "../../kw-library/kw-input/kw-inputs.module";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { KwToggleBtnComponent } from "../../kw-library/kw-toggle-btn/kw-toggle-btn.component";
import { ActionBarButton } from "./action-bar";
import { Subject, debounceTime, distinctUntilChanged } from "rxjs";

@Component({
  selector: "app-action-bar",
  standalone: true,
  imports: [
    KwButtonModule,
    KwFormFieldModule,
    KwInputsModule,
    TranslateModule,
    CommonModule,
    FormsModule,
    KwToggleBtnComponent,
  ],
  templateUrl: "./action-bar.component.html",
  styleUrl: "./action-bar.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class ActionBarComponent {
  Utility = Utility;

  @Input() isDetailPage: boolean;
  @Input() isListGridViewVisible: boolean;
  @Input() isGridView: boolean;
  @Input() isSearchBar: boolean = true;
  @Input() actionBarLeftButtons: ActionBarButton[];
  @Input() actionBarRightButtons: ActionBarButton[];

  /**
   * Triggers when any left action button clicked
   * @returns Action Button Information
   */
  @Output() onLeftActionBtnClickOutput = new EventEmitter<ActionBarButton>();

  /**
   * Triggers when any right action button clicked
   * @returns Action Button Information
   */
  @Output() onRightActionBtnClickOutput = new EventEmitter<ActionBarButton>();

  /**
   * Triggers when search input entered
   * @returns input value informations
   */
  @Output() onSearchOutput = new EventEmitter<string>();

  /**
   * Triggers when toggle button clicked
   * @returns Boolean value
   */
  @Output() onToggleOutput = new EventEmitter<boolean>();

  public searchString: string;
  searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((result) => {
        this.onSearchOutput.emit(result);
      });
  }

  /**
   * Triggers when any left action button clicked
   * @param actionBtn Action Button Information
   */
  onLeftActionBtnClick = (actionBtn: ActionBarButton) => {
    this.onLeftActionBtnClickOutput.emit(actionBtn);
  };

  /**
   * Triggers when any right action button clicked
   * @param actionBtn Action Button Information
   */
  onRightActionBtnClick = (actionBtn: ActionBarButton) => {
    this.onRightActionBtnClickOutput.emit(actionBtn);
  };

  /**
   * Triggers when search input entered
   * @param event
   */
  onSearch = (searchString) => {
    this.searchSubject.next(searchString);
  };

  /**
   * Triggers when toggle button clicked
   * @param event Boolean value
   */
  onToggle = (event) => {
    this.onToggleOutput.emit(event);
  };
}
