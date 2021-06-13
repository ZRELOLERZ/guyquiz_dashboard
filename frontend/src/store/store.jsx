import create from 'zustand';

const useStore = create((set) => ({
  allMultipleChoiceTypeQuestionData: [{}],
  allEssayTypeQuestionData: [{}],
  selectedPageIndex: 0,
  setAllMultipleChoiceTypeQuestionData: (allMultipleChoiceTypeQuestionData) =>
    set((state) => ({
      ...state,
      allMultipleChoiceTypeQuestionData
    })),
  setAllEssayTypeQuestionData: (allEssayTypeQuestionData) =>
    set((state) => ({
      ...state,
      allEssayTypeQuestionData
    })),
  setSelectedPageIndex: (selectedPageIndex) =>
    set((state) => ({
      ...state,
      selectedPageIndex
    }))
}));

export default useStore;
