import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavBar } from './components/NavBar';
import { THEME } from './theme/theme';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = (props) => {
    const { todoId } = useContext(ScreenContext)

    return (
        <View style={styles.container}>
            <NavBar title="ToDo App" />
            <View style={styles.content}>
                { todoId ? <TodoScreen /> : <MainScreen /> }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
        flex: 1,
    },
    container: {
        flex: 1,
    }
});
