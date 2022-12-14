import React from 'react';

export interface IStory extends React.HTMLAttributes<Element> {
   title: string;
   content: string[];
   storyId: string;
   subtitle: string;
   imageUrl: string;
   timestamps: number[];
   publishDate: Date;
   voiceoverUrl?: string;
   externalReadLink?: string;
}

export interface IWordElement {
   text: string;
   index: number;
}