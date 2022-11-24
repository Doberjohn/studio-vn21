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
      const wordsArray = [...data.results[0].alternatives[0].words].slice(1);

      for (const wordElement of wordsArray) {
         parsedTranscript.words = [...parsedTranscript.words, wordElement.word];
         parsedTranscript.timestamps = [...parsedTranscript.timestamps,
            parseFloat(wordElement.endTime.substring(0, wordElement.endTime.indexOf('s'))) * 1000];
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