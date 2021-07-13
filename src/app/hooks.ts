import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/store'
import { RootState } from 'app/reducer'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = ():AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
