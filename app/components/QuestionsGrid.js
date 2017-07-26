import React, {Component} from 'react';
import {Container, Content, Button} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import {Circle} from "./Circle";

export class QuestionsGrid extends Component {

    constructor(props) {
        super(props);
        this.game = {
            rows: [
                {
                    images: ['tomyTeacher/assets/ant.png',
                        'tomyTeacher/assets/ant.png', 'tomyTeacher/assets/ant.png', 'tomyTeacher/assets/ant.png'],
                    correctAnswer: 0
                },
                {
                    images: ['tomyTeacher/assets/ant.png',
                        'tomyTeacher/assets/ant.png', 'tomyTeacher/assets/ant.png', 'tomyTeacher/assets/ant.png'],
                    correctAnswer: 1
                },
                {
                    images: ['tomyTeacher/assets/ant.png',
                        'tomyTeacher/assets/ant.png', 'tomyTeacher/assets/ant.png', 'tomyTeacher/assets/ant.png'],
                    correctAnswer: 3
                },
                {
                    images: ['tomyTeacher/assets/ant.png',
                        'tomyTeacher/assets/ant.png', 'tomyTeacher/assets/ant.png', 'tomyTeacher/assets/ant.png'],
                    correctAnswer: 2
                },
                {
                    images: ['tomyTeacher/assets/ant.png',
                        'tomyTeacher/assets/ant.png', 'tomyTeacher/assets/ant.png', 'tomyTeacher/assets/ant.png'],
                    correctAnswer: 1
                },
            ]
        }
    }

    getStatus(rowIndex) {
        let status = "";
        if (rowIndex % 4 === 0) {
            status = "failed";
        }
        if (rowIndex % 4 === 1) {
            status = "unknown";
        }
        if (rowIndex % 4 === 2) {
            status = "success";
        }
        if (rowIndex % 4 === 3) {
            status = "current";
        }
        return status;

    }
    dynamicRender = () => {
        return (
            <Container>
                <Content>
                    <Grid style={{
                        borderColor: 'black',
                        borderRadius: 0,
                        borderWidth: 2,
                    }}>
                        {this.game.rows.map((row, rowIndex) => {

                            return <Row key={rowIndex}>
                                    <Col key={rowIndex} style={{
                                        backgroundColor: 'transparent',
                                        justifyContent:'center',
                                        paddingLeft: 20,
                                        width: 80,
                                    }}>
                                        <Circle status={this.getStatus(rowIndex)}/>
                                    </Col>
                                    {row.images.map((imgUrl, colIndex) => {
                                        return <Col key={"" + rowIndex + " " + colIndex} style={{
                                            backgroundColor: 'transparent'
                                        }}>
                                            <Button style={{
                                                flex: 1,
                                                alignSelf: 'stretch',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: 'transparent',
                                                width: 150,
                                                height: 150,
                                                borderTopColor: 'black',
                                                borderTopWidth: 0.5,
                                                borderRightColor: 'black',
                                                borderRightWidth: 0.5,
                                                borderRadius: 0,

                                            }}>
                                                <Image style={{width: 150, height: 150}}
                                                       source={require('tomyTeacher/assets/ant.png')}/>
                                            </Button>
                                        </Col>
                                    })}
                                </Row>
                            }
                        )}
                    </Grid>
                </Content>
            </Container>
        );
    }

    render() {
        return this.dynamicRender();
    }
}