import react from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableHighlight,
} from 'react-native';
const includesData = [
  {
    Test: 'Blood Test',
    Quatity: 'Quantity : 17',
    RM: 'RM 5',
  },
  {
    Test: 'BMI Checking',
    Quatity: 'Quantity : 05',
    RM: 'RM 2',
  },
  {
    Test: 'Skincare routine',
    Quatity: 'Quantity : 24',
    RM: 'RM 11',
  },
];
const ServiceDetail = () => {
  return (
    <>
      <View style={styles.root}>
        <SafeAreaView>
          <StatusBar backgroundColor="#f3f5f9" barStyle="dark-content" />
        </SafeAreaView>
        <View style={styles.appNav}>
          <View style={styles.navImgView}>
            <Image
              source={require('../assets/images/arrow-right.png')}
              style={styles.navImg}
            />
          </View>
          <View style={styles.navTit}>
            <Text style={styles.appTittle}>Service Details</Text>
          </View>
        </View>
        <View style={styles.appCart}>
          <View style={styles.cartImgView}>
            <Image
              source={require('../assets/images/jesper.png')}
              style={styles.cartImg}
            />
          </View>
          <View style={styles.cartDetail}>
            <View style={styles.cartDetailT1View}>
              <Text style={styles.cartDetailCustomerT1}>
                1000+ customer benefited
              </Text>
            </View>
            <View style={styles.cartDetailT2View}>
              <Text style={styles.cartDetailCustomerT2}>
                Joint Pain relieve treatment.
              </Text>
            </View>
            <View style={styles.cartDetailT3View}>
              <Text style={styles.cartDetailCustomerT3}>Practo Healthcare</Text>
            </View>
            <View style={styles.cartDetailT4View}>
              <View style={styles.cartDetailCustomerTS4}>
                <Text style={styles.RM}>RM 45</Text>
                <Text style={styles.MON}> / Mon</Text>
              </View>
              <View>
                <Text style={styles.cartDetailCustomerT4}>RM 64/mon</Text>
              </View>
            </View>
            <View style={styles.cartButtons}>
              <View>
                <TouchableHighlight>
                  <View style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View>
                <TouchableHighlight>
                  <View style={styles.EnquireButton}>
                    <Text style={styles.EnquireButtonText}>Enquire</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cartTC}>
          <View>
            <Text style={styles.textTC}>T&C</Text>
          </View>
          <View style={styles.viewMore}>
            <Text style={styles.tcPara}>
              Terms of service are the legal agreements between a service
              provider and a person who wants to use that service.
              <Text style={styles.ViewM}> View More</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.includeText}>Includes</Text>
          </View>
          <View >
          {includesData.map(item => {
            return (
              <View style={styles.includeView}>

                <View>
                  <Text style={styles.BloodTextt}>{item.Test}</Text>
                </View>
                <View style={styles.BloodTestQuant}>
                  <View>
                    <Text style={styles.quantity}>{item.Quatity}</Text>
                  </View>
                  <View>
                    <Text style={styles.RM5}>{item.RM}</Text>
                  </View>
                </View>
                
              </View>
            );
          })}
          </View>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <TouchableHighlight>
          <View style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f3f5f9',
  },
  appNav: {
    flexDirection: 'row',
    height: '8%',
    backgroundColor: '#f3f5f9',
  },
  navTit: {
    flex: 10,
  },
  navImgView: {
    flex: 0,
  },
  appTittle: {
    color: '#363a57',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '400',
  },
  navImg: {
    height: 20,
    width: 10,
    marginTop: 12,
    marginLeft: 30,
  },
  cartImgView: {
    flex: 1,
    minWidth: '25%',
  },
  cartDetail: {
    flex: 1,
    minWidth: '75%',
  },
  appCart: {
    height: '29%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ffff',
  },
  cartImg: {
    height: 60,
    width: 60,
    marginTop: 20,
    marginLeft: 15,
  },
  cartDetailT1View: {
    marginTop: 15,
    marginBottom: 7,
  },
  cartDetailCustomerT1: {
    borderColor: '#ced1d8',
    borderWidth: 1,
    height: 30,
    width: 200,
    padding: 5,
    textAlign: 'center',
    fontSize: 14,
    color: '#9297a5',
  },
  cartDetailCustomerT2: {
    fontSize: 18,
    color: '#363a57',
    fontWeight: '500',
  },
  cartDetailT2View: {
    marginBottom: 7,
  },
  cartDetailT3View: {
    fontSize: 17,
    color: '#9297a5',
    marginBottom: 7,
  },
  cartDetailCustomerT3: {
    fontSize: 16,
    color: '#9297a5',
  },
  cartDetailT4View: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  cartDetailCustomerTS4: {
    flexDirection: 'row',
  },
  cartDetailCustomerT4: {
    fontSize: 12,
    marginTop:4,
    marginLeft: 10,
    textDecorationLine: 'line-through',
    color: '#9297a5',
  },
  RM: {
    color: '#353596',
    fontWeight: '700',
    fontSize: 16,
  },
  MON: {
    color: '#353596',
    fontSize: 13,
    marginTop: 4,
  },
  cartButtons: {
    flexDirection: 'row',
    marginTop:5,
  },
  addButton: {
    borderColor: '#ced1d8',
    borderWidth: 1,
    height: 40,
    width: 110,
    borderRadius: 6,
  },
  addButtonText: {
    textAlign: 'center',
    marginTop: 5,
    color: '#252b43',
    fontWeight: '500',
    fontSize: 16,
  },
  EnquireButton: {
    backgroundColor: '#353596',
    borderWidth: 1,
    height: 40,
    width: 100,
    borderRadius: 6,
    marginLeft: 20,
  },
  EnquireButtonText: {
    textAlign: 'center',
    marginTop: 5,
    color: '#ffff',
    fontWeight: '500',
    fontSize: 17,
  },
  cartTC: {
    backgroundColor: '#ffff',
    height: 360,
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 2,
    padding:3
  },
  textTC: {
    marginTop: 8,
    fontSize: 17,
    color: '#9297a5',
    fontWeight: '400',
  },
  viewMore: {
    backgroundColor: '#f3f5f9',
    height: '30%',
    width: '95%',
    borderRadius: 5,
    padding: 7,
    marginTop: 5,
  },
  ViewM: {
    color: '#f27d35',
    fontWeight: '500',
  },
  tcPara: {
    fontSize: 16,
    color: '#252b43',
    alignItems: 'center',
    lineHeight: 30,
    fontStyle: 'italic',
  },
  includeView: {
    borderBottomWidth: 3,
    borderColor: '#f3f5f9',
    marginBottom: 2,
    padding:2
    
  },
  includeText: {
    color: '#9297a5',
    fontSize: 16,
    marginTop:5,
    marginBottom:6,
    lineHeight:23

  },
  BloodTextt: {
    fontSize: 18,
    color: '#363a57',
    fontWeight: '500',
  },
  BloodTestQuant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  quantity: {
    fontSize: 16,
    color: '#9297a5',
  },
  RM5: {
    fontSize: 17,
    color: '#353596',
    fontWeight: '600',
  },
  bottomBox: {
    width: '100%',
    backgroundColor: '#353596',
    padding:18
  },
  buyButtonText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: '#ffff',
    fontWeight: '800',
  },
});

export default ServiceDetail;
