import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  SafeAreaView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
          <View style={styles.cardContainer}>
            <View style={styles.titleContainer}>

              <View style={styles.appTitle}>

                <View style={styles.profileContainer}>
                  <Image
                    source={require("../assets/profile_img.png")}
                    style={styles.profileicon}
                  />
                </View>

                <View style={styles.postAuthorTextContainer}>
                  <Text style={styles.postAuthorText}>{this.props.story.author}</Text>
                </View>

            </View>

                <Image
                source={require('../assets/'+this.props.story.image)}
                style={styles.postImage}
                />

                <Text style={styles.postDescription}>
                    {this.props.story.description}
                </Text>

            </View>

            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
            
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  appTitle: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent:"center"
  },
  profileContainer: {
    flex: 0.3,
    justifyContent: "center",
  },
  profileicon: {
    width: "30%",
    height: "300%",
    resizeMode: "contain",
  },
  postAuthorTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  postAuthorText: {
    fontSize: RFValue(20),
    fontFamily: "Bubblegum-Sans",
    color: "white",
    marginTop:20,
    
  },
  postImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250),
    marginTop:30,
  },
  postDescription: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(14),
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  }, 
  likeButton: { 
    width: RFValue(160), 
    height: RFValue(40), 
    justifyContent: "center", 
    alignItems: "center", 
    flexDirection: "row", 
    backgroundColor: "#eb3948", 
    borderRadius: RFValue(30),
  }, 
  likeText: { 
    color: "white", 
    fontFamily: "Bubblegum-Sans", 
    fontSize: RFValue(25), 
    marginLeft: RFValue(5) 
  }
})