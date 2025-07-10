import { Component } from "@angular/core";
import { KwBreadcrumbModule } from "../../kw-library/kw-breadcrumb/kw-breadcrumb.module";

@Component({
  selector: "app-common-container",
  standalone: true,
  imports: [KwBreadcrumbModule],
  templateUrl: "./common-container.component.html",
  styleUrl: "./common-container.component.scss",
})
export class CommonContainerComponent {}
