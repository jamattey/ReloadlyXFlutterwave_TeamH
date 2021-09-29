import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  Form as Form,
  FormField as FormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  BankName: Yup.string().required().label("Bank Name"),
  AccountNumber: Yup.string().required().min(1).max(1000000000).label("Account Number"),
  AccountType: Yup.string().required().min(4).label("Account Type"),
});

function BankDetails() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ BankName: "", AccountNumber: "", AccountType: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="Bank Name"
          placeholder="Bank Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
           icon="lock"
          name="Account Number"
          placeholder="Account Number"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="Account Type"
          placeholder="Account Type"
        />
        <SubmitButton title="Submit Payment Details" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default BankDetails;