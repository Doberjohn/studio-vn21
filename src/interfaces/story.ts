import React from 'react';

export interface IStory extends React.HTMLAttributes<Element> {
   title: string;
   content: string;
   storyId: string;
   subtitle: string;
   imageUrl: string;
   transcript: Object;
   publishDate: Date;
   voiceoverUrl?: string;
   externalReadLink?: string;
}