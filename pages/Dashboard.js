import React from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View, Button, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Dashboard({route})
{
        const navigation = useNavigation();
        const email = route.params.paramEmail;

        return (
            <SafeAreaView>
                <Text>WELCOME TO DASHBOARD</Text>
                <Text>{email}</Text>
            </SafeAreaView>
        )
}

