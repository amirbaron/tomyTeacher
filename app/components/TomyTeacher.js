import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {QuestionsGrid} from "./QuestionsGrid";

export class TomyTeacher extends React.Component {
    render() {
        return (
            <QuestionsGrid/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
