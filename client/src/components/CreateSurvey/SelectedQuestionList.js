import React from 'react';

export default ({data, selectedQuestions}) => {

    const sList = selectedQuestions
        .map(id => {
            const txt = data[id].text
            return (
                <li key={id}>{txt}</li>
            )
        })

    return (
      <div>
        <ul>
          {sList}
        </ul>
      </div>
    );
}