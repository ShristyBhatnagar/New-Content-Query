declare interface IContentQueryStrings {
  TextFieldName: any;
  WebPartDescription: string;
  TemplateChecklistLabel: string;
  ViewFieldsChecklistLabel: string;
  ListIdChecklistLabel: string;
  WebUrlChecklistLabel: string;
  SiteUrlChecklistLabel: string;
  PlaceholderButtonLabel: string;
  PlaceholderIconText: string;
  SourcePageDescription: string;
  QueryPageDescription: string;
  DisplayPageDescription: string;
  ExternalPageDescription: string;
  SourceGroupName: string;
  QueryGroupName: string;
  DisplayGroupName: string;
  ExternalGroupName: string;
  SiteUrlFieldLabel: string;
  SiteUrlFieldPlaceholder: string;
  SiteUrlFieldLoadingLabel: string;
  SiteUrlFieldLoadingError: string;
  WebUrlFieldLabel: string;
  WebUrlFieldPlaceholder: string;
  WebUrlFieldLoadingLabel: string;
  WebUrlFieldLoadingError: string;
  ListTitleFieldLabel: string;
  ListTitleFieldPlaceholder: string;
  ListTitleFieldLoadingLabel: string;
  ListTitleFieldLoadingError: string;
  OrderByFieldLabel: string;
  OrderByFieldLoadingLabel: string;
  OrderByFieldLoadingError: string;
  ConfigureItemSelectorLabel: string;
  ClearItemSelectorLabel: string;
  ConfigureItemSelectorDescriptionLabel: string;
  ClearItemSelectorDescriptionLabel: string;
  LimitEnabledFieldLabel: string;
  ItemLimitPlaceholder: string;
  ErrorItemLimit: string;
  RecursiveEnabledFieldLabel: string;
  TemplateUrlFieldLabel: string;
  TemplateUrlPlaceholder: string;
  ExternalScriptsLabel: string;
  ExternalScriptsPlaceholder: string;
  ErrorTemplateExtension: string;
  ErrorTemplateResolve: string;
  ErrorWebAccessDenied: string;
  ErrorWebNotFound: string;
  ShowItemsAscending: string;
  ShowItemsDescending: string;
  DynamicallyGeneratedTemplate: string;
  IncompleteLabel: string;
  CompleteLabel: string;
  queryFilterPanelStrings: any;
  viewFieldsChecklistStrings: any;
  templateTextStrings: any;
  contentQueryStrings: any;
}

declare module 'contentQueryStrings' {
  const strings: IContentQueryStrings;
  export = strings;
}
