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
  Fab,
  Form,
  Item, 
  Input,
  Label,
  Spinner,
  Toast
} from 'native-base';

import ENV from '../env';
import axios from 'axios';

type Props = {};
export default class AddContactScreen extends Component<Props> {

  constructor(props) {
    super(props);
  
    const { navigation } = this.props;

    this.state = {
      name: navigation.getParam('action', ''),
      cell_phone: navigation.getParam('cell_phone', ''),
      phone: navigation.getParam('phone', ''),
      city: navigation.getParam('city', ''),
      state: navigation.getParam('state', ''),
      nationality: navigation.getParam('nationality', ''),
      isLoading: false
    };
  }

  storeContact()  {
    this.setState({ isLoading: true });

    let self = this;

    axios.post(ENV.API_URL + '/contacts', this.state).then((response) => {
        console.log('response', response.data);
        self.setState({ isLoading: false });

        self.props.navigation.goBack();

    }).catch( (error) => {
        console.log('error', error);
        self.setState({ isLoading: false });

        Toast.show({
          text: 'Ops! algo me parece errado..',
          buttonText: 'Ok'
        })     
    });

  }

  render() {
    return (
     <Container>
        <Header>
          <Left>
              <Button transparent onPress={() => this.props.navigation.goBack() }>
                <Icon name='arrow-back' />
              </Button>
          </Left>
          <Body>
            <Title>Novo Contato</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          { this.state.isLoading ? <Spinner color='blue'></Spinner> :
          <Form>
            <Item stackedLabel>
              <Label>Nome</Label>
              <Input 
                value={ this.state.name }
                onChangeText={(text) => this.setState({name: text})}
              />
            </Item>
            <Item stackedLabel>
              <Label>Telefone Celular</Label>
              <Input 
                value={ this.state.cell_phone }
                onChangeText={(text) => this.setState({cell_phone: text})}
              />
            </Item>
            <Item stackedLabel>
              <Label>Telefone Fixo</Label>
              <Input 
                value={ this.state.phone }
                onChangeText={(text) => this.setState({phone: text})}
              />
            </Item>
            <Item stackedLabel>
              <Label>Cidade</Label>
              <Input 
                value={ this.state.city }
                onChangeText={(text) => this.setState({city: text})}
              />
            </Item>
            <Item stackedLabel>
              <Label>Estado</Label>
              <Input 
                value={ this.state.state }
                onChangeText={(text) => this.setState({state: text})}
              />
            </Item>
          </Form>
          }
        </Content>
        <Fab           
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.storeContact() }>
            <Icon name="checkmark" />
          </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
