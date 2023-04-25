import { ICategory, IStory, IStoryThumbnail } from './story';

export interface IBrowseTemplate {
    latestStory: IStoryThumbnail;
    categories: ICategory[];
}

export interface IStoryTemplate {
    story: IStory;
}