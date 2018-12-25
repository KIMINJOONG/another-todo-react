import React from 'react';

const TodoListTemplate = ({ time, form , children }) => {
    return (
        <main>
            <div className="title">
                오늘 할일
            </div>
            <section>
                {time}
            </section>
            <section>
                {form}
            </section>
            <section>
                {children}
            </section>
        </main>
    );
}
export default TodoListTemplate;