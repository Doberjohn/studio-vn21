import React from 'react';

export interface IStory extends React.HTMLAttributes<Element> {
   content: string[];
   imageUrl: string;
   publishDate: Date;
   storyId: string;
   timestamps: number[];
   title: string;
   voiceoverUrl?: string;
   voiceoverPCM?: number[];
}

export interface IWordElement {
   index: number;
   text: string;
}