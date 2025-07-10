import { Component, Input } from "@angular/core";

@Component({
  selector: "app-page-title",
  standalone: true,
  imports: [],
  templateUrl: "./page-title.component.html",
  styleUrl: "./page-title.component.scss",
})
export class PageTitleComponent {
  @Input() title: string | undefined;
  @Input() titlePreFix: string | undefined;
  @Input() titlePostFix: string | undefined;
}
