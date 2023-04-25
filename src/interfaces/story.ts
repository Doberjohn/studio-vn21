import React from 'react';

export interface ICategory {
   title: string;
   stories: IStoryThumbnail[];
}

export interface IStory extends React.HTMLAttributes<Element> {
   author: string;
   content: string[];
   coverUrl: string;
   publishDate: Date;
   storyId: string;
   timestamps?: number[];
   title: string;
   voiceoverUrl?: string;
   voiceoverPCM?: number[];
}

export interface IStoryThumbnail {
   coverUrl: string;
   storyId: string;
   title: string;
}

export interface IWordElement {
   index: number;
   text: string;
}