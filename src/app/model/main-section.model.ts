export interface IMainSectionContent {
  sectionTitle: string;
  sectionTitleImage: string;
  sectionButtonText: string;
  sectionContent: ISectionContent[];
}

export interface ISectionContent {
  index?: number;
  title: string;
  text: string;
  image: string;
  backgroundImage?: string;
  className?: string;
}
