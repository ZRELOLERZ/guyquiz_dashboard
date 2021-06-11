### Layout of Database

- MultipleChoiceTypeQuestion

  - ID
  - dateCreated
  - dateModified
  - questionYear
  - [ questionType ](#question-type)
  - [ questionAuthor ](#question-author)
  - questionText
  - questionTextHasImage

- Choice

  - ID
  - dateCreated
  - dateModified
  - [ questionPosition ](#question-position)
  - choiceHasImage
  - choiceText
  - multipleChoiceTypeQuestionReferenceID

- ChoiceImage

  - ID
  - dateCreated
  - dateModified
  - imageName
  - hasCaption
  - imageCaption
  - choiceReferenceID

- EssayTypeQuestion

  - ID
  - dateCreated
  - dateModified
  - questionYear
  - [ questionType ](#question-type)
  - [ questionAuthor ](#question-author)
  - questionText
  - questionTextHasImage
  - answerText
  - answerTextHasImage

- EssayTypeQuestionImage

  - ID
  - dateCreated
  - dateModified
  - [imageType](#image-type)
  - imageName
  - hasCaption
  - imageCaption
  - essayTypeQuestionReferenceID

<a id="question-position"></a>

- `questionPosition`
  - `a` - `d`

<a id="question-type"></a>

- `questionType`
  - `essay`
  - `multipleChoice`

<a id="subject-type"></a>

- `subjectType`
  - `mathematics`
  - `socialstudies`
  - `english`
  - `science`

<a id="image-type"></a>

- `imageType`
  - `answer` OR `question`

<a id="question-type"></a>

- `questionType`
  - `NGSA`
  - `NGFA`
  - `miscellaneous`

<a id="question-author"></a>

- `questionAuthor`
  - `Simeon`
  - `MOE`
