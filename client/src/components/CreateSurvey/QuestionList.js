import React from 'react';

export default ({data}) => {

    const questionList = data
        .map(q => {
            return (
                <li 
                    key={q.id}
                >
                    {q.text}
                </li>
            )
    })

    return (
      <div>
          {questionList}
      </div>
    );
}