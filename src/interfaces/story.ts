import React from 'react';

export interface IStory extends React.HTMLAttributes<Element> {
   title: string;
   subtitle: string;
   storyId: string;
   imageUrl: string;
   publishDate: Date;
   externalReadLink?: string;
}