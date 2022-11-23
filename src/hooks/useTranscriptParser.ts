import { ITranscript } from '../interfaces';

interface GoogleSpeechAPIResponse {
   results: {
      alternatives: {
         words: {
            word: string;
            startTime: string;
            endTime: string;
         }[]
      }[]
   }[]
}

export const useTranscriptParser = () => {

   const parseGoogleSpeechAPIData = (data: GoogleSpeechAPIResponse): ITranscript => {
      const parsedTranscript: ITranscript = { words: [], timestamps: [] };
      const wordsArray = [...data.results[0].alternatives[0].words];

      for (let i = 1;i < wordsArray.length;i++) {
         parsedTranscript.words = [...parsedTranscript.words, wordsArray[i].word];
         parsedTranscript.timestamps = [...parsedTranscript.timestamps,
            parseFloat(wordsArray[i].endTime.substring(0, wordsArray[i].endTime.indexOf('s'))) * 1000];
      }

      return parsedTranscript;
   };

   const transcriptParser = (data: GoogleSpeechAPIResponse, parserType = 'google-speech-recognition-api') => {
      if (data) {
         switch (parserType) {
            case 'google-speech-recognition-api':
               return parseGoogleSpeechAPIData(data);
         }
      }
      return;
   };

   return { transcriptParser };
};