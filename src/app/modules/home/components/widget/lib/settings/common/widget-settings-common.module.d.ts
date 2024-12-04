import * as i0 from "@angular/core";
import * as i1 from "@home/components/widget/lib/settings/common/image-cards-select.component";
import * as i2 from "@home/components/widget/lib/settings/common/font-settings.component";
import * as i3 from "@home/components/widget/lib/settings/common/font-settings-panel.component";
import * as i4 from "@home/components/widget/lib/settings/common/color-settings.component";
import * as i5 from "@home/components/widget/lib/settings/common/color-settings-panel.component";
import * as i6 from "@home/components/widget/lib/settings/common/css-unit-select.component";
import * as i7 from "@home/components/widget/lib/settings/common/css-size-input.component";
import * as i8 from "@home/components/widget/lib/settings/common/date-format-select.component";
import * as i9 from "@home/components/widget/lib/settings/common/date-format-settings-panel.component";
import * as i10 from "@home/components/widget/lib/settings/common/auto-date-format-settings.component";
import * as i11 from "@home/components/widget/lib/settings/common/auto-date-format-settings-panel.component";
import * as i12 from "@home/components/widget/lib/settings/common/background-settings.component";
import * as i13 from "@home/components/widget/lib/settings/common/background-settings-panel.component";
import * as i14 from "@home/components/widget/lib/settings/common/value-source.component";
import * as i15 from "@home/components/widget/lib/settings/common/value-source-data-key.component";
import * as i16 from "@home/components/widget/lib/settings/common/legend-config.component";
import * as i17 from "@home/components/widget/lib/settings/common/widget-font.component";
import * as i18 from "@home/components/widget/lib/settings/common/count-widget-settings.component";
import * as i19 from "@home/components/widget/lib/settings/common/color-range-list.component";
import * as i20 from "@home/components/widget/lib/settings/common/color-range-panel.component";
import * as i21 from "@home/components/widget/lib/settings/common/color-range-settings.component";
import * as i22 from "@home/components/widget/lib/settings/common/action/get-value-action-settings.component";
import * as i23 from "@home/components/widget/lib/settings/common/action/get-value-action-settings-panel.component";
import * as i24 from "@home/components/widget/lib/settings/control/device-key-autocomplete.component";
import * as i25 from "@home/components/widget/lib/settings/common/action/set-value-action-settings.component";
import * as i26 from "@home/components/widget/lib/settings/common/action/set-value-action-settings-panel.component";
import * as i27 from "@home/components/widget/lib/settings/common/action/widget-action.component";
import * as i28 from "@home/components/widget/lib/settings/common/action/custom-action-pretty-resources-tabs.component";
import * as i29 from "@home/components/widget/lib/settings/common/action/custom-action-pretty-editor.component";
import * as i30 from "@home/components/widget/lib/settings/common/action/mobile-action-editor.component";
import * as i31 from "@home/components/widget/lib/settings/common/action/widget-action-settings.component";
import * as i32 from "@home/components/widget/lib/settings/common/action/widget-action-settings-panel.component";
import * as i33 from "@home/components/widget/lib/settings/common/button/widget-button-appearance.component";
import * as i34 from "@home/components/widget/lib/settings/common/button/widget-button-custom-style.component";
import * as i35 from "@home/components/widget/lib/settings/common/button/widget-button-toggle-custom-style.component";
import * as i36 from "@home/components/widget/lib/settings/common/button/widget-button-custom-style-panel.component";
import * as i37 from "@home/components/widget/lib/settings/common/button/widget-button-toggle-custom-style-panel.component";
import * as i38 from "@home/components/widget/lib/settings/common/chart/time-series-chart-axis-settings.component";
import * as i39 from "@home/components/widget/lib/settings/common/chart/time-series-chart-thresholds-panel.component";
import * as i40 from "@home/components/widget/lib/settings/common/chart/time-series-chart-threshold-row.component";
import * as i41 from "@home/components/widget/lib/settings/common/chart/time-series-chart-threshold-settings-panel.component";
import * as i42 from "@home/components/widget/lib/settings/common/chart/time-series-no-aggregation-bar-width-settings.component";
import * as i43 from "@home/components/widget/lib/settings/common/chart/time-series-chart-y-axes-panel.component";
import * as i44 from "@home/components/widget/lib/settings/common/chart/time-series-chart-y-axis-row.component";
import * as i45 from "@home/components/widget/lib/settings/common/chart/time-series-chart-axis-settings-panel.component";
import * as i46 from "@home/components/widget/lib/settings/common/chart/time-series-chart-axis-settings-button.component";
import * as i47 from "@home/components/widget/lib/settings/common/chart/chart-animation-settings.component";
import * as i48 from "@home/components/widget/lib/settings/common/chart/chart-fill-settings.component";
import * as i49 from "@home/components/widget/lib/settings/common/chart/chart-bar-settings.component";
import * as i50 from "@home/components/widget/lib/settings/common/chart/time-series-chart-threshold-settings.component";
import * as i51 from "@home/components/widget/lib/settings/common/chart/time-series-chart-states-panel.component";
import * as i52 from "@home/components/widget/lib/settings/common/chart/time-series-chart-state-row.component";
import * as i53 from "@home/components/widget/lib/settings/common/chart/time-series-chart-grid-settings.component";
import * as i54 from "@home/components/widget/lib/settings/common/indicator/status-widget-state-settings.component";
import * as i55 from "@home/components/widget/lib/settings/common/scada/scada-symbol-object-settings.component";
import * as i56 from "@home/components/widget/lib/settings/common/data-key-input.component";
import * as i57 from "@home/components/widget/lib/settings/common/entity-alias-input.component";
import * as i58 from "@home/components/widget/lib/settings/common/advanced-range.component";
import * as i59 from "@home/components/widget/lib/settings/common/gradient.component";
import * as i60 from "@angular/common";
import * as i61 from "@shared/shared.module";
import * as i62 from "@home/components/shared-home-components.module";
export declare class WidgetSettingsCommonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetSettingsCommonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<WidgetSettingsCommonModule, [typeof i1.ImageCardsSelectOptionDirective, typeof i1.ImageCardsSelectComponent, typeof i2.FontSettingsComponent, typeof i3.FontSettingsPanelComponent, typeof i4.ColorSettingsComponent, typeof i5.ColorSettingsPanelComponent, typeof i6.CssUnitSelectComponent, typeof i7.CssSizeInputComponent, typeof i8.DateFormatSelectComponent, typeof i9.DateFormatSettingsPanelComponent, typeof i10.AutoDateFormatSettingsComponent, typeof i11.AutoDateFormatSettingsPanelComponent, typeof i12.BackgroundSettingsComponent, typeof i13.BackgroundSettingsPanelComponent, typeof i14.ValueSourceComponent, typeof i15.ValueSourceDataKeyComponent, typeof i16.LegendConfigComponent, typeof i17.WidgetFontComponent, typeof i18.CountWidgetSettingsComponent, typeof i19.ColorRangeListComponent, typeof i20.ColorRangePanelComponent, typeof i21.ColorRangeSettingsComponent, typeof i22.GetValueActionSettingsComponent, typeof i23.GetValueActionSettingsPanelComponent, typeof i24.DeviceKeyAutocompleteComponent, typeof i25.SetValueActionSettingsComponent, typeof i26.SetValueActionSettingsPanelComponent, typeof i27.WidgetActionComponent, typeof i28.CustomActionPrettyResourcesTabsComponent, typeof i29.CustomActionPrettyEditorComponent, typeof i30.MobileActionEditorComponent, typeof i31.WidgetActionSettingsComponent, typeof i32.WidgetActionSettingsPanelComponent, typeof i33.WidgetButtonAppearanceComponent, typeof i34.WidgetButtonCustomStyleComponent, typeof i35.WidgetButtonToggleCustomStyleComponent, typeof i36.WidgetButtonCustomStylePanelComponent, typeof i37.WidgetButtonToggleCustomStylePanelComponent, typeof i38.TimeSeriesChartAxisSettingsComponent, typeof i39.TimeSeriesChartThresholdsPanelComponent, typeof i40.TimeSeriesChartThresholdRowComponent, typeof i41.TimeSeriesChartThresholdSettingsPanelComponent, typeof i42.TimeSeriesNoAggregationBarWidthSettingsComponent, typeof i43.TimeSeriesChartYAxesPanelComponent, typeof i44.TimeSeriesChartYAxisRowComponent, typeof i45.TimeSeriesChartAxisSettingsPanelComponent, typeof i46.TimeSeriesChartAxisSettingsButtonComponent, typeof i47.ChartAnimationSettingsComponent, typeof i48.ChartFillSettingsComponent, typeof i49.ChartBarSettingsComponent, typeof i50.TimeSeriesChartThresholdSettingsComponent, typeof i51.TimeSeriesChartStatesPanelComponent, typeof i52.TimeSeriesChartStateRowComponent, typeof i53.TimeSeriesChartGridSettingsComponent, typeof i54.StatusWidgetStateSettingsComponent, typeof i55.ScadaSymbolObjectSettingsComponent, typeof i56.DataKeyInputComponent, typeof i57.EntityAliasInputComponent, typeof i58.AdvancedRangeComponent, typeof i59.GradientComponent], [typeof i60.CommonModule, typeof i61.SharedModule, typeof i62.SharedHomeComponentsModule], [typeof i1.ImageCardsSelectOptionDirective, typeof i1.ImageCardsSelectComponent, typeof i2.FontSettingsComponent, typeof i3.FontSettingsPanelComponent, typeof i4.ColorSettingsComponent, typeof i5.ColorSettingsPanelComponent, typeof i6.CssUnitSelectComponent, typeof i7.CssSizeInputComponent, typeof i8.DateFormatSelectComponent, typeof i9.DateFormatSettingsPanelComponent, typeof i10.AutoDateFormatSettingsComponent, typeof i11.AutoDateFormatSettingsPanelComponent, typeof i12.BackgroundSettingsComponent, typeof i13.BackgroundSettingsPanelComponent, typeof i14.ValueSourceComponent, typeof i15.ValueSourceDataKeyComponent, typeof i16.LegendConfigComponent, typeof i17.WidgetFontComponent, typeof i18.CountWidgetSettingsComponent, typeof i19.ColorRangeListComponent, typeof i20.ColorRangePanelComponent, typeof i21.ColorRangeSettingsComponent, typeof i22.GetValueActionSettingsComponent, typeof i23.GetValueActionSettingsPanelComponent, typeof i24.DeviceKeyAutocompleteComponent, typeof i25.SetValueActionSettingsComponent, typeof i26.SetValueActionSettingsPanelComponent, typeof i27.WidgetActionComponent, typeof i28.CustomActionPrettyResourcesTabsComponent, typeof i29.CustomActionPrettyEditorComponent, typeof i30.MobileActionEditorComponent, typeof i31.WidgetActionSettingsComponent, typeof i32.WidgetActionSettingsPanelComponent, typeof i33.WidgetButtonAppearanceComponent, typeof i34.WidgetButtonCustomStyleComponent, typeof i35.WidgetButtonToggleCustomStyleComponent, typeof i36.WidgetButtonCustomStylePanelComponent, typeof i37.WidgetButtonToggleCustomStylePanelComponent, typeof i38.TimeSeriesChartAxisSettingsComponent, typeof i39.TimeSeriesChartThresholdsPanelComponent, typeof i40.TimeSeriesChartThresholdRowComponent, typeof i41.TimeSeriesChartThresholdSettingsPanelComponent, typeof i42.TimeSeriesNoAggregationBarWidthSettingsComponent, typeof i43.TimeSeriesChartYAxesPanelComponent, typeof i44.TimeSeriesChartYAxisRowComponent, typeof i45.TimeSeriesChartAxisSettingsPanelComponent, typeof i46.TimeSeriesChartAxisSettingsButtonComponent, typeof i47.ChartAnimationSettingsComponent, typeof i48.ChartFillSettingsComponent, typeof i49.ChartBarSettingsComponent, typeof i50.TimeSeriesChartThresholdSettingsComponent, typeof i51.TimeSeriesChartStatesPanelComponent, typeof i52.TimeSeriesChartStateRowComponent, typeof i53.TimeSeriesChartGridSettingsComponent, typeof i54.StatusWidgetStateSettingsComponent, typeof i55.ScadaSymbolObjectSettingsComponent, typeof i56.DataKeyInputComponent, typeof i57.EntityAliasInputComponent, typeof i58.AdvancedRangeComponent, typeof i59.GradientComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<WidgetSettingsCommonModule>;
}
