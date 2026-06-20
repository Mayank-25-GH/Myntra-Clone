import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import itemsData from "../../data/items.json";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(fetchStatusActions.markFetchingStarted());
    const items = itemsData && itemsData.items ? itemsData.items[0] : [];
    dispatch(itemActions.addInitialItems(items));
    dispatch(fetchStatusActions.markFetchDone());
    dispatch(fetchStatusActions.markFetchingFinished());

    return;
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
