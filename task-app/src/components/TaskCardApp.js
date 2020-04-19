import React from 'react';
import List from './List';
import TextFilter from './TextFilter';
import AddItem from './AddItem';
import Container from '@material-ui/core/Container';
import DateFilter from './DateFilter';
import ThemeProvider from './ThemeProvider';

export default class FormStackApp extends React.Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            selected: false
        }
    }

    toggleClass = (index) => {
        const listItem = document.getElementById('item' + index);
        if (listItem.classList.contains('selected')) {
            listItem.classList.remove('selected')
        } else {
            listItem.classList.add('selected');
        }
    }

    render() {
        return (
            <ThemeProvider>
                <Container maxWidth='md'>
                    <h1>Task Card App</h1>
                    <TextFilter />
                    <AddItem />
                    <DateFilter />
                    <List toggleClass={this.toggleClass} selected={this.state.selected} />
                </Container>
            </ThemeProvider>
        )
    }
}