import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  imageContainer: {
    height: 200,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  detailsContainer: {
    backgroundColor: '#E8F5FF',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#555',
  },
  info: {
    color: '#333',
  },
  price: {
    fontWeight: 'bold',
    color: '#FF6347',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginTop: 10,
  },

  map: {
    height: 300,
    borderRadius: 10,
    marginTop: 20,
  },
});
