import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Icon,
  Title,
  Content,
  Text,
  Button,
  Fab
} from 'native-base';

import ENV from '../env';
import axios from 'axios';

type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    return (
     <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Agenda</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Fab
           
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('AddContact') }>
            <Icon name="add" />
          </Fab>
      </Container>
    );
  }
}
