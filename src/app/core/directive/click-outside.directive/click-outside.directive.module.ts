import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClickOutsideDirective } from "./click-outside.directive";

@NgModule({
  declarations: [],
  imports: [CommonModule, ClickOutsideDirective],
  exports: [ClickOutsideDirective],
})
export class ClickOutsideDirectiveModule {}
