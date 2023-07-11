import React from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInput, Button, Text } from "react-native";
import FlatButton from "../shared/button";

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  body: Yup.string().required(),
  rating: Yup.number().min(1).max(5).required(),
});

export default function ReviewForm({ handleAddReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(value, actions) => {
          actions.resetForm();
          handleAddReview(value);
        }}
        validationSchema={validationSchema}>
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
