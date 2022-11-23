import React from 'react';

export interface ITranscript {
   timestamps: number[];
   words: string[];
}

export interface IStory extends React.HTMLAttributes<Element> {
   title: string;
   content: string[];
   storyId: string;
   subtitle: string;
   imageUrl: string;
   transcript: ITranscript;
   publishDate: Date;
   voiceoverUrl?: string;
   externalReadLink?: string;
}