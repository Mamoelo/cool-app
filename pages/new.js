import React from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View, Button, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function New()
{
        const navigation = useNavigation();

        return (
            <SafeAreaView>
                <Text>WELCOME TO NEW SCREEN</Text>
            </SafeAreaView>
        )
}