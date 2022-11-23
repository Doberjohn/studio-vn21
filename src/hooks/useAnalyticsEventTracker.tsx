import ReactGA from 'react-ga4';

export const useAnalyticsEventTracker = (category: string) => {
   return (action: string, label: string) => {
      ReactGA.event({ category, action, label });
   };
};