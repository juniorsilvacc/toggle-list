/* eslint-disable prettier/prettier */
import React, {useReducer, useState} from 'react';
import {sha256} from 'react-native-sha256';

import {Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';

import styles from './styles';

const Main = () => {

  const initialState = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.item];
      case 'CHECK':
        return;
      case 'REMOVE':
        return;
      default:
        return state;
    }
  };

  const [product, setProduct] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar produto"
            placeholderTextColor="#b4b4b4"
            value={product}
            onChangeText={text => {
              setProduct(text);
            }}
          />

          <TouchableOpacity
            style={styles.touchable}
            onPress={async () =>  {
              const hashId = await sha256(product);
              dispatch({
                type: 'ADD',
                item: {
                  id: hashId,
                  title: product,
                  check: false,
                },
              });

              setProduct('');
            }}
          >
            <Text style={styles.touchableText}>+</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={state}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.itemTouchable}
                onPress={() => {
                  dispatch({
                    type: 'CHECK',
                    id: item.id,
                  });
                }}
              >
                <Text style={styles.listItem}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
          </View>
      </View>
    </>
  );
};

export default Main;
