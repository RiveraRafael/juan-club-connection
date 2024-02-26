
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  label: {
    flex: 2,
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 12,
    paddingBottom: 12,
  },
  buttonView: {
    paddingTop: 30,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;