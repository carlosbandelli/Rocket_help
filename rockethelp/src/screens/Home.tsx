import { HStack, IconButton, VStack, useTheme, Text, Heading } from 'native-base';
import Logo from '../assets/logo_secondary.svg';
import { Filter } from '../components/Filter'
import React from 'react';
import { SignOut } from 'phosphor-react-native';

export function Home() {
    const { colors } = useTheme()
  return (
    <VStack flex={1} pb={6} bg="gray.700">
        <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
        >
            <Logo/>

            <IconButton
                icon={<SignOut size={26} color={colors.gray[300]} />}
            />

        </HStack>
        
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">                
                <Heading color="gray.100">
                    Meus Chamados
                </Heading>
                
                <Text color="gray.200">
                    Meus 
                </Text>
            </HStack>
            
            <HStack>
                <Filter 
                    type='open'
                    title='em andamento' 
                    />
                <Filter 
                    type='closed'
                    title='finalizado' 
                    />
            </HStack>
        </VStack>
    </VStack>
  );
}