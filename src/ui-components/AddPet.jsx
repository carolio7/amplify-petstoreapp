/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function AddPet(props) {
  const { prop, pet, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixFiveSixTwoSevenZeroFourValue,
    setTextFieldThreeSixFiveSixTwoSevenZeroFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixFiveSixTwoSevenOneEightValue,
    setTextFieldThreeSixFiveSixTwoSevenOneEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixFiveSixTwoSevenOneOneValue,
    setTextFieldThreeSixFiveSixTwoSevenOneOneValue,
  ] = useStateMutationAction("");
  const buttonTwoNineSevenSixSixNineTwoSixOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
      age: textFieldTwoNineSevenSixSixNineTwoThreeValue,
      breed: textFieldTwoNineSevenSixSixNineTwoFourValue,
      about: textFieldThreeSixFiveSixTwoSevenZeroFourValue,
      image: textFieldThreeSixFiveSixTwoSevenOneEightValue,
      color: textFieldThreeSixFiveSixTwoSevenOneOneValue,
    },
    model: Pet,
    schema: schema,
  });
  const buttonThreeSixFiveSevenTwoSevenTwoSixOnClick = useDataStoreUpdateAction(
    {
      fields: {
        name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
        age: textFieldTwoNineSevenSixSixNineTwoThreeValue,
        breed: textFieldTwoNineSevenSixSixNineTwoFourValue,
        about: textFieldThreeSixFiveSixTwoSevenZeroFourValue,
        image: textFieldThreeSixFiveSixTwoSevenOneEightValue,
        color: textFieldThreeSixFiveSixTwoSevenOneOneValue,
      },
      id: pet?.id,
      model: Pet,
      schema: schema,
    }
  );
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="35px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddPet")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="35px"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(199,213,251,1)"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="200px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add Pet"
            {...getOverrideProps(overrides, "Add Pet")}
          ></Text>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="http://clipart-library.com/data_images/293910.png"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            label="Name"
            placeholder="Kitty"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            label="Age"
            placeholder="12"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            label="Breed"
            placeholder="Labrador"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            label="About"
            placeholder="Cute, funny"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixFiveSixTwoSevenZeroFourValue}
            onChange={(event) => {
              setTextFieldThreeSixFiveSixTwoSevenZeroFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36562704")}
          ></TextField>
          <TextField
            label="Color"
            placeholder="Blue"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixFiveSixTwoSevenOneOneValue}
            onChange={(event) => {
              setTextFieldThreeSixFiveSixTwoSevenOneOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36562711")}
          ></TextField>
          <TextField
            label="Image"
            placeholder="image-url"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixFiveSixTwoSevenOneEightValue}
            onChange={(event) => {
              setTextFieldThreeSixFiveSixTwoSevenOneEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36562718")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
        <Flex
          gap="40px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <Button
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonTwoNineSevenSixSixNineTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button29766926")}
          ></Button>
          <Button
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonThreeSixFiveSevenTwoSevenTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button36572726")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
