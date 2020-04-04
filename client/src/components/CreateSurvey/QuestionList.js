import React from 'react';

export default ({data, filterQuestion, addQuestion, selectedQuestions}) => {

    const questionList = data
        .filter(q => {
            // remove names that do not match current filterText
            return q.id !== filterQuestion && !selectedQuestions.includes(q.id)
        })
        .map(q => {
            return (
                <li 
                    key={q.id}
                    onClick={() => addQuestion(q.id)}
                >
                    {q.text}
                </li>
            )
    })

    return (
      <div>
        <ul>
          {questionList}
        </ul>
      </div>
    );
}