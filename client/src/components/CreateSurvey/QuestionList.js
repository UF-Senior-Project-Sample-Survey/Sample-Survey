import React from 'react';

export default ({data, filterQuestion}) => {

    const questionList = data
        .filter(q => {
            // remove names that do not match current filterText
            return q.id !== filterQuestion
        })
        .map(q => {
            return (
                <li key={q.id}>{q.text}</li>
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