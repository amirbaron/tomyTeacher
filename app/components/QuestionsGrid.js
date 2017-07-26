import React, {Component} from 'react';
import {Container, Content, Button} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import {Circle} from "./Circle";
import {getImage} from '../../assets/images'

export class QuestionsGrid extends Component {

    constructor(props) {
        super(props);
        this.game = {
            rows: [
                {
                    images: ['ant', 'chicken', 'snake'],
                    correctAnswer: 1
                },
                {
                    images: ['snail', 'rabbit', 'turtle'],
                    correctAnswer: 1
                },
                {
                    images: ['runningKid',
                        'sittingBaby', 'crawlingBaby'],
                    correctAnswer: 0
                },
                {
                    images: ['tricycle', 'blueBicycle', 'motorCycle'],
                    correctAnswer: 2
                },
                {
                    images: ['greenBicycle', 'runningBaby', 'runningMan'],
                    correctAnswer: 0
                },
                {
                    images: ['damselfly', 'dove', 'butterfly'],
                    correctAnswer: 0
                },
                {
                    images: ['sailingKid', 'motorboatKid', 'familyBoat'],
                    correctAnswer: 0
                },
                {
                    images: ['pig', 'horse', 'duck'],
                    correctAnswer: 0
                },
                {
                    images: ['redCar', 'runningTeenager', 'kidOnUnicycle'],
                    correctAnswer: 0
                },
                {
                    images: ['hawk', 'airplane', 'helicopter'],
                    correctAnswer: 0
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

                                return <Row key={rowIndex} >
                                    <Col key={rowIndex} style={{
                                        backgroundColor: 'transparent',
                                        justifyContent: 'center',
                                        borderTopColor: 'black',
                                        borderTopWidth: 0.5,
                                        borderRightColor: 'black',
                                        borderRightWidth: 0.5,
                                        borderRadius: 0,
                                        alignItems:'center',
                                        flex: 1,
                                        flexBasis: 0,
                                        flexShrink: 0,
                                    }}>
                                        <Circle status={this.getStatus(rowIndex)}/>
                                    </Col>
                                    {row.images.map((imgName, colIndex) => {
                                        return <Col key={"" + rowIndex + " " + colIndex} style={{
                                            backgroundColor: 'transparent',
                                            flex: 3,
                                            flexBasis: 0,
                                            flexShrink: 0,
                                        }}>
                                            <Button style={{
                                                width: '100%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                backgroundColor: 'transparent',
                                                borderTopColor: 'black',
                                                borderTopWidth: 0.5,
                                                borderRightColor: 'black',
                                                borderRightWidth: 0.5,
                                                borderRadius: 0,
                                            }}>
                                                <Image resizeMode='cover'
                                                       source={getImage(imgName)}/>
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