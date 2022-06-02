import { MarkedOptionsService } from '@shared/components/marked-options.service';
import * as i0 from "@angular/core";
import * as i1 from "@shared/components/footer.component";
import * as i2 from "@shared/components/logo.component";
import * as i3 from "@shared/components/footer-fab-buttons.component";
import * as i4 from "@shared/components/toast.directive";
import * as i5 from "@shared/components/fullscreen.directive";
import * as i6 from "@shared/components/circular-progress.directive";
import * as i7 from "@shared/components/mat-chip-draggable.directive";
import * as i8 from "@shared/components/hotkeys.directive";
import * as i9 from "@shared/components/tb-anchor.component";
import * as i10 from "@shared/components/popover.component";
import * as i11 from "@shared/components/directives/sring-template-outlet.directive";
import * as i12 from "@shared/components/directives/component-outlet.directive";
import * as i13 from "@shared/components/markdown.component";
import * as i14 from "@shared/components/help.component";
import * as i15 from "@shared/components/help-markdown.component";
import * as i16 from "@shared/components/help-popup.component";
import * as i17 from "@shared/components/tb-checkbox.component";
import * as i18 from "@shared/components/tb-error.component";
import * as i19 from "@shared/components/cheatsheet.component";
import * as i20 from "@shared/components/breadcrumb.component";
import * as i21 from "@shared/components/user-menu.component";
import * as i22 from "@shared/components/time/timewindow.component";
import * as i23 from "@shared/components/time/timewindow-panel.component";
import * as i24 from "@shared/components/time/timeinterval.component";
import * as i25 from "@shared/components/time/quick-time-interval.component";
import * as i26 from "@shared/components/dashboard-select.component";
import * as i27 from "@shared/components/dashboard-select-panel.component";
import * as i28 from "@shared/components/time/datetime-period.component";
import * as i29 from "@shared/components/time/datetime.component";
import * as i30 from "@shared/components/time/timezone-select.component";
import * as i31 from "@shared/components/value-input.component";
import * as i32 from "@shared/components/dashboard-autocomplete.component";
import * as i33 from "@shared/components/entity/entity-subtype-autocomplete.component";
import * as i34 from "@shared/components/entity/entity-subtype-select.component";
import * as i35 from "@shared/components/entity/entity-subtype-list.component";
import * as i36 from "@shared/components/entity/entity-autocomplete.component";
import * as i37 from "@shared/components/entity/entity-list.component";
import * as i38 from "@shared/components/entity/entity-type-select.component";
import * as i39 from "@shared/components/entity/entity-select.component";
import * as i40 from "@shared/components/group/entity-group-autocomplete.component";
import * as i41 from "@shared/components/group/owner-autocomplete.component";
import * as i42 from "@shared/components/group/entity-group-select.component";
import * as i43 from "@shared/components/group/entity-group-list.component";
import * as i44 from "@shared/components/group/edge-entity-group-list.component";
import * as i45 from "@shared/components/originator-select.component";
import * as i46 from "@shared/components/entity/entity-keys-list.component";
import * as i47 from "@shared/components/entity/entity-list-select.component";
import * as i48 from "@shared/components/entity/entity-type-list.component";
import * as i49 from "@shared/components/queue/queue-autocomplete.component";
import * as i50 from "@shared/components/relation/relation-type-autocomplete.component";
import * as i51 from "@shared/components/socialshare-panel.component";
import * as i52 from "@shared/components/json-object-edit.component";
import * as i53 from "@shared/components/json-object-view.component";
import * as i54 from "@shared/components/json-content.component";
import * as i55 from "@shared/components/js-func.component";
import * as i56 from "@shared/components/css.component";
import * as i57 from "@shared/components/html.component";
import * as i58 from "@shared/components/fab-toolbar.component";
import * as i59 from "@shared/components/widgets-bundle-select.component";
import * as i60 from "@shared/components/dialog/confirm-dialog.component";
import * as i61 from "@shared/components/dialog/alert-dialog.component";
import * as i62 from "@shared/components/dialog/progress-dialog.component";
import * as i63 from "@shared/components/dialog/todo-dialog.component";
import * as i64 from "@shared/components/dialog/color-picker-dialog.component";
import * as i65 from "@shared/components/dialog/material-icons-dialog.component";
import * as i66 from "@shared/components/color-input.component";
import * as i67 from "@shared/components/material-icon-select.component";
import * as i68 from "@shared/components/dialog/node-script-test-dialog.component";
import * as i69 from "@shared/components/json-form/json-form.component";
import * as i70 from "@shared/components/image-input.component";
import * as i71 from "@shared/components/multiple-image-input.component";
import * as i72 from "@shared/components/file-input.component";
import * as i73 from "@shared/components/message-type-autocomplete.component";
import * as i74 from "@shared/components/kv-map.component";
import * as i75 from "@shared/components/nav-tree.component";
import * as i76 from "@shared/components/led-light.component";
import * as i77 from "@shared/components/markdown-editor.component";
import * as i78 from "@shared/pipe/nospace.pipe";
import * as i79 from "@shared/pipe/milliseconds-to-time-string.pipe";
import * as i80 from "@shared/pipe/enum-to-array.pipe";
import * as i81 from "@shared/pipe/highlight.pipe";
import * as i82 from "@shared/pipe/truncate.pipe";
import * as i83 from "@shared/pipe/tbJson.pipe";
import * as i84 from "@shared/pipe/file-size.pipe";
import * as i85 from "@shared/pipe/safe.pipe";
import * as i86 from "@shared/pipe/selectable-columns.pipe";
import * as i87 from "@shared/pipe/keyboard-shortcut.pipe";
import * as i88 from "@shared/pipe/permission.pipes";
import * as i89 from "@shared/components/directives/tb-json-to-string.directive";
import * as i90 from "@shared/components/dialog/json-object-edit-dialog.component";
import * as i91 from "@shared/components/time/history-selector/history-selector.component";
import * as i92 from "@shared/components/entity/entity-gateway-select.component";
import * as i93 from "@shared/components/contact.component";
import * as i94 from "@shared/components/widgets-bundle-search.component";
import * as i95 from "@shared/components/role/group-permissions.component";
import * as i96 from "@shared/components/role/group-permission-dialog.component";
import * as i97 from "./components/group/share-entity-group.component";
import * as i98 from "@shared/components/ota-package/ota-package-autocomplete.component";
import * as i99 from "@shared/components/button/copy-button.component";
import * as i100 from "@shared/components/button/toggle-password.component";
import * as i101 from "@shared/components/protobuf-content.component";
import * as i102 from "@angular/common";
import * as i103 from "@angular/router";
import * as i104 from "@ngx-translate/core";
import * as i105 from "@angular/material/button";
import * as i106 from "@angular/material/checkbox";
import * as i107 from "@angular/material/icon";
import * as i108 from "@angular/material/card";
import * as i109 from "@angular/material/progress-bar";
import * as i110 from "@angular/material/input";
import * as i111 from "@angular/material/snack-bar";
import * as i112 from "@angular/material/sidenav";
import * as i113 from "@angular/material/toolbar";
import * as i114 from "@angular/material/menu";
import * as i115 from "@angular/material/grid-list";
import * as i116 from "@angular/material/dialog";
import * as i117 from "@angular/material/select";
import * as i118 from "@angular/material/tooltip";
import * as i119 from "@angular/material/table";
import * as i120 from "@angular/material/paginator";
import * as i121 from "@angular/material/sort";
import * as i122 from "@angular/material/progress-spinner";
import * as i123 from "@angular/material/divider";
import * as i124 from "@angular/material/tabs";
import * as i125 from "@angular/material/radio";
import * as i126 from "@angular/material/slide-toggle";
import * as i127 from "@angular/material/datepicker";
import * as i128 from "@mat-datetimepicker/core";
import * as i129 from "ngx-daterangepicker-material";
import * as i130 from "@angular/material/slider";
import * as i131 from "@angular/material/expansion";
import * as i132 from "@angular/material/stepper";
import * as i133 from "@angular/material/autocomplete";
import * as i134 from "@angular/material/chips";
import * as i135 from "@angular/material/list";
import * as i136 from "@angular/cdk/drag-drop";
import * as i137 from "angular-gridster2";
import * as i138 from "ngx-clipboard";
import * as i139 from "@angular/flex-layout";
import * as i140 from "@angular/forms";
import * as i141 from "@angular/cdk/overlay";
import * as i142 from "ngx-sharebuttons";
import * as i143 from "angular2-hotkeys";
import * as i144 from "ngx-color-picker";
import * as i145 from "ngx-hm-carousel";
import * as i146 from "@fullcalendar/angular";
import * as i147 from "ngx-drag-drop";
import * as i148 from "@flowjs/ngx-flow";
import * as i149 from "ngx-flowchart";
import * as i150 from "ngx-markdown";
import * as i151 from "@tinymce/tinymce-angular";
export declare function MarkedOptionsFactory(markedOptionsService: MarkedOptionsService): MarkedOptionsService;
export declare class SharedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SharedModule, [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.MatChipDraggableDirective, typeof i8.TbHotkeysDirective, typeof i9.TbAnchorComponent, typeof i10.TbPopoverComponent, typeof i11.TbStringTemplateOutletDirective, typeof i12.TbComponentOutletDirective, typeof i10.TbPopoverDirective, typeof i13.TbMarkdownComponent, typeof i14.HelpComponent, typeof i15.HelpMarkdownComponent, typeof i16.HelpPopupComponent, typeof i17.TbCheckboxComponent, typeof i4.TbSnackBarComponent, typeof i18.TbErrorComponent, typeof i19.TbCheatSheetComponent, typeof i20.BreadcrumbComponent, typeof i21.UserMenuComponent, typeof i22.TimewindowComponent, typeof i23.TimewindowPanelComponent, typeof i24.TimeintervalComponent, typeof i25.QuickTimeIntervalComponent, typeof i26.DashboardSelectComponent, typeof i27.DashboardSelectPanelComponent, typeof i28.DatetimePeriodComponent, typeof i29.DatetimeComponent, typeof i30.TimezoneSelectComponent, typeof i31.ValueInputComponent, typeof i32.DashboardAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityGroupAutocompleteComponent, typeof i41.OwnerAutocompleteComponent, typeof i42.EntityGroupSelectComponent, typeof i43.EntityGroupListComponent, typeof i44.EdgeEntityGroupListComponent, typeof i45.OriginatorSelectComponent, typeof i46.EntityKeysListComponent, typeof i47.EntityListSelectComponent, typeof i48.EntityTypeListComponent, typeof i49.QueueAutocompleteComponent, typeof i50.RelationTypeAutocompleteComponent, typeof i51.SocialSharePanelComponent, typeof i52.JsonObjectEditComponent, typeof i53.JsonObjectViewComponent, typeof i54.JsonContentComponent, typeof i55.JsFuncComponent, typeof i56.CssComponent, typeof i57.HtmlComponent, typeof i58.FabTriggerDirective, typeof i58.FabActionsDirective, typeof i58.FabToolbarComponent, typeof i59.WidgetsBundleSelectComponent, typeof i60.ConfirmDialogComponent, typeof i61.AlertDialogComponent, typeof i62.ProgressDialogComponent, typeof i63.TodoDialogComponent, typeof i64.ColorPickerDialogComponent, typeof i65.MaterialIconsDialogComponent, typeof i66.ColorInputComponent, typeof i67.MaterialIconSelectComponent, typeof i68.NodeScriptTestDialogComponent, typeof i69.JsonFormComponent, typeof i70.ImageInputComponent, typeof i71.MultipleImageInputComponent, typeof i72.FileInputComponent, typeof i73.MessageTypeAutocompleteComponent, typeof i74.KeyValMapComponent, typeof i75.NavTreeComponent, typeof i76.LedLightComponent, typeof i77.MarkdownEditorComponent, typeof i78.NospacePipe, typeof i79.MillisecondsToTimeStringPipe, typeof i80.EnumToArrayPipe, typeof i81.HighlightPipe, typeof i82.TruncatePipe, typeof i83.TbJsonPipe, typeof i84.FileSizePipe, typeof i85.SafePipe, typeof i86.SelectableColumnsPipe, typeof i87.KeyboardShortcutPipe, typeof i88.HasGenericPermissionPipe, typeof i88.HasEntityGroupPermissionPipe, typeof i88.HasGroupEntityPermissionPipe, typeof i89.TbJsonToStringDirective, typeof i90.JsonObjectEditDialogComponent, typeof i91.HistorySelectorComponent, typeof i92.EntityGatewaySelectComponent, typeof i93.ContactComponent, typeof i94.WidgetsBundleSearchComponent, typeof i95.GroupPermissionsComponent, typeof i96.GroupPermissionDialogComponent, typeof i97.ShareEntityGroupComponent, typeof i98.OtaPackageAutocompleteComponent, typeof i94.WidgetsBundleSearchComponent, typeof i99.CopyButtonComponent, typeof i100.TogglePasswordComponent, typeof i101.ProtobufContentComponent], [typeof i102.CommonModule, typeof i103.RouterModule, typeof i104.TranslateModule, typeof i105.MatButtonModule, typeof i106.MatCheckboxModule, typeof i107.MatIconModule, typeof i108.MatCardModule, typeof i109.MatProgressBarModule, typeof i110.MatInputModule, typeof i111.MatSnackBarModule, typeof i112.MatSidenavModule, typeof i113.MatToolbarModule, typeof i114.MatMenuModule, typeof i115.MatGridListModule, typeof i116.MatDialogModule, typeof i117.MatSelectModule, typeof i118.MatTooltipModule, typeof i119.MatTableModule, typeof i120.MatPaginatorModule, typeof i121.MatSortModule, typeof i122.MatProgressSpinnerModule, typeof i123.MatDividerModule, typeof i124.MatTabsModule, typeof i125.MatRadioModule, typeof i126.MatSlideToggleModule, typeof i127.MatDatepickerModule, typeof i128.MatNativeDatetimeModule, typeof i128.MatDatetimepickerModule, typeof i129.NgxDaterangepickerMd, typeof i130.MatSliderModule, typeof i131.MatExpansionModule, typeof i132.MatStepperModule, typeof i133.MatAutocompleteModule, typeof i134.MatChipsModule, typeof i135.MatListModule, typeof i136.DragDropModule, typeof i137.GridsterModule, typeof i138.ClipboardModule, typeof i139.FlexLayoutModule, typeof i140.FormsModule, typeof i140.ReactiveFormsModule, typeof i141.OverlayModule, typeof i142.ShareModule, typeof i143.HotkeyModule, typeof i144.ColorPickerModule, typeof i145.NgxHmCarouselModule, typeof i146.FullCalendarModule, typeof i147.DndModule, typeof i148.NgxFlowModule, typeof i149.NgxFlowchartModule, typeof i150.MarkdownModule], [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.MatChipDraggableDirective, typeof i8.TbHotkeysDirective, typeof i9.TbAnchorComponent, typeof i11.TbStringTemplateOutletDirective, typeof i12.TbComponentOutletDirective, typeof i10.TbPopoverDirective, typeof i13.TbMarkdownComponent, typeof i14.HelpComponent, typeof i15.HelpMarkdownComponent, typeof i16.HelpPopupComponent, typeof i17.TbCheckboxComponent, typeof i18.TbErrorComponent, typeof i19.TbCheatSheetComponent, typeof i20.BreadcrumbComponent, typeof i21.UserMenuComponent, typeof i22.TimewindowComponent, typeof i23.TimewindowPanelComponent, typeof i24.TimeintervalComponent, typeof i25.QuickTimeIntervalComponent, typeof i26.DashboardSelectComponent, typeof i28.DatetimePeriodComponent, typeof i29.DatetimeComponent, typeof i30.TimezoneSelectComponent, typeof i32.DashboardAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityGroupAutocompleteComponent, typeof i41.OwnerAutocompleteComponent, typeof i42.EntityGroupSelectComponent, typeof i43.EntityGroupListComponent, typeof i44.EdgeEntityGroupListComponent, typeof i45.OriginatorSelectComponent, typeof i46.EntityKeysListComponent, typeof i47.EntityListSelectComponent, typeof i48.EntityTypeListComponent, typeof i49.QueueAutocompleteComponent, typeof i50.RelationTypeAutocompleteComponent, typeof i51.SocialSharePanelComponent, typeof i52.JsonObjectEditComponent, typeof i53.JsonObjectViewComponent, typeof i54.JsonContentComponent, typeof i55.JsFuncComponent, typeof i56.CssComponent, typeof i57.HtmlComponent, typeof i58.FabTriggerDirective, typeof i58.FabActionsDirective, typeof i58.FabToolbarComponent, typeof i59.WidgetsBundleSelectComponent, typeof i31.ValueInputComponent, typeof i105.MatButtonModule, typeof i106.MatCheckboxModule, typeof i107.MatIconModule, typeof i108.MatCardModule, typeof i109.MatProgressBarModule, typeof i110.MatInputModule, typeof i111.MatSnackBarModule, typeof i112.MatSidenavModule, typeof i113.MatToolbarModule, typeof i114.MatMenuModule, typeof i115.MatGridListModule, typeof i116.MatDialogModule, typeof i117.MatSelectModule, typeof i118.MatTooltipModule, typeof i119.MatTableModule, typeof i120.MatPaginatorModule, typeof i121.MatSortModule, typeof i122.MatProgressSpinnerModule, typeof i123.MatDividerModule, typeof i124.MatTabsModule, typeof i125.MatRadioModule, typeof i126.MatSlideToggleModule, typeof i127.MatDatepickerModule, typeof i128.MatNativeDatetimeModule, typeof i128.MatDatetimepickerModule, typeof i129.NgxDaterangepickerMd, typeof i130.MatSliderModule, typeof i131.MatExpansionModule, typeof i132.MatStepperModule, typeof i133.MatAutocompleteModule, typeof i134.MatChipsModule, typeof i135.MatListModule, typeof i136.DragDropModule, typeof i137.GridsterModule, typeof i138.ClipboardModule, typeof i139.FlexLayoutModule, typeof i140.FormsModule, typeof i140.ReactiveFormsModule, typeof i141.OverlayModule, typeof i142.ShareModule, typeof i143.HotkeyModule, typeof i144.ColorPickerModule, typeof i145.NgxHmCarouselModule, typeof i151.EditorModule, typeof i146.FullCalendarModule, typeof i147.DndModule, typeof i149.NgxFlowchartModule, typeof i150.MarkdownModule, typeof i60.ConfirmDialogComponent, typeof i61.AlertDialogComponent, typeof i62.ProgressDialogComponent, typeof i63.TodoDialogComponent, typeof i64.ColorPickerDialogComponent, typeof i65.MaterialIconsDialogComponent, typeof i66.ColorInputComponent, typeof i67.MaterialIconSelectComponent, typeof i68.NodeScriptTestDialogComponent, typeof i69.JsonFormComponent, typeof i70.ImageInputComponent, typeof i71.MultipleImageInputComponent, typeof i72.FileInputComponent, typeof i73.MessageTypeAutocompleteComponent, typeof i74.KeyValMapComponent, typeof i75.NavTreeComponent, typeof i76.LedLightComponent, typeof i77.MarkdownEditorComponent, typeof i78.NospacePipe, typeof i79.MillisecondsToTimeStringPipe, typeof i80.EnumToArrayPipe, typeof i81.HighlightPipe, typeof i82.TruncatePipe, typeof i83.TbJsonPipe, typeof i87.KeyboardShortcutPipe, typeof i84.FileSizePipe, typeof i85.SafePipe, typeof i86.SelectableColumnsPipe, typeof i103.RouterModule, typeof i88.HasGenericPermissionPipe, typeof i88.HasEntityGroupPermissionPipe, typeof i88.HasGroupEntityPermissionPipe, typeof i104.TranslateModule, typeof i90.JsonObjectEditDialogComponent, typeof i91.HistorySelectorComponent, typeof i92.EntityGatewaySelectComponent, typeof i93.ContactComponent, typeof i94.WidgetsBundleSearchComponent, typeof i95.GroupPermissionsComponent, typeof i96.GroupPermissionDialogComponent, typeof i97.ShareEntityGroupComponent, typeof i98.OtaPackageAutocompleteComponent, typeof i94.WidgetsBundleSearchComponent, typeof i99.CopyButtonComponent, typeof i100.TogglePasswordComponent, typeof i101.ProtobufContentComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SharedModule>;
}
