import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { setData } from '../store';
import { getData } from '../api';

export const MainContainer = ({ navigation, data, setDataInStore }) => {

  useEffect(() => {
    async function fetchData() {
      const dataFromServer = await getData();

      setDataInStore(dataFromServer);
    }

    fetchData();
  }, []);

  if (data.length === 0) {
    return (
      <Text>
        Loading...
      </Text>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const profileImage = item.user.profile_image.medium;
          const userName = item.user.first_name;
          const mainImage = item.urls.regular;

          return (
            <View>
              <View style={style.profile}>
                <Image style={style.profileImage} source={{ uri: profileImage }} />
                <Text style={style.profileText}>{userName}</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.navigate("Photo", { imgUrl: mainImage }) }}>
                <Image style={style.mainImage} source={{ uri: mainImage }} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>

  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  profileText: {
    fontSize: 20,
  },
  mainImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});

const stateToProps = (state) => {
  return {
    data: state.data,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    setDataInStore: dataFromServer => dispatch(setData(dataFromServer)),
  };
};

export const Main = connect(stateToProps, dispatchToProps)(MainContainer);

MainContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
  setDataInStore: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
