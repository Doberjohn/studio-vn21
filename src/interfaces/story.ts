import React from 'react';

export interface IStory extends React.HTMLAttributes<Element> {
   title: string;
   storyId: string;
   subtitle: string;
   imageUrl: string;
   publishDate: Date;
   content: string[];
   timestamps: number[];
   voiceoverUrl?: string;
   externalReadLink?: string;
}

export interface IWordElement {
   text: string;
   index: number;
}