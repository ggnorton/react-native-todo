import React, { useState, useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { THEME } from '../theme/theme'
import { AppCard } from '../components/AppCard'
import { EditModal } from '../components/EditModal'
import { AppTextBold } from '../components/AppTextBold'
import { AppButton } from '../components/AppButton'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const TodoScreen = (props) => {
    const { todos, updateTodo, removeTodo } = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)

    const todo = todos.find(t => t.id === todoId)

    const [modal, setModal] = useState(false)
    return(
        <View style={styles.todoScreen}>
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20} />
                </AppButton>
            </AppCard>
            <View style={styles.buttonsWrapper}>
                <View style={styles.button}>
                    <AppButton color={THEME.COLOR_GREY} onPress={() => changeScreen(null)}>
                        <AntDesign name='back' size={20} color='#fff' />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color={THEME.COLOR_DANGER} onPress={() => removeTodo(todo.id)}>
                        <FontAwesome name='remove' size={20} color='#fff' />
                    </AppButton>
                </View>
            </View>
            <EditModal
                visible={modal}
                value={todo.title}
                onCancel={() => setModal(false)}
                id={todo.id}
                onSave={updateTodo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        marginBottom: 20,
        padding: 15,
    },
    button: {
        width: Dimensions.get('window').width * 0.4,
    },
    title: {
        fontSize: 20,
    }
})