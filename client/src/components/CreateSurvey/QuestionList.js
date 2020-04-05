import React from 'react';

export default ({data}) => {

    const questionList = data
        .map(q => {
            return (
                <li 
                    key={q.id}
                    className = ''
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