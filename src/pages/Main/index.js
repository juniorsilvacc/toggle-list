/* eslint-disable prettier/prettier */
import React, {useState} from 'react';


import {Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';

import styles from './styles';

import useMarketList from '../../hooks/useMarketList';

const Main = () => {

  const [state, addItem, checkItem, removeItem] = useMarketList();
  const [product, setProduct] = useState('');

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
              addItem(product);
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
              <View style={styles.itemsContainer}>
                <TouchableOpacity
                  onPress={() => {
                    checkItem(item.id);
                  }}
                >
                  <Text style={[styles.listItem,
                    item.check ? styles.listItemCheck : '',
                  ]}>{item.title}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonRemove}
                  onPress={() => {
                    removeItem(item.id);
                  }}
                >
                  <Text style={styles.buttonRemoveText}>Remover</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          </View>
      </View>
    </>
  );
};

export default Main;
