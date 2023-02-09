import {IStory} from "./story";

export interface IBrowseTemplate {
    latestStory: IStory;
    previousStories: IStory[];
}

export interface IStoryTemplate {
    story: IStory;
}