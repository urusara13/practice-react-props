import React, { useEffect, useCallback } from "react";

const CompletePay = () => {

	const checkPay = useCallback(() => {
        /**
         *  checkPay 함수는 1.5 초 뒤에 Point 를 반환하는 Promise 입니다.
         * 여기 함수에서 반환하는 Point 값을 Header 에 업데이트 시켜주세요.
         */
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(500);
			}, 1500);
		});
	}, []);

	useEffect(async () => {
		/** 이 컴포넌트 useEffect 에서 checkPay 를 호출 하여 확인하고, Point 를 업데이트 해야 합니다. */
    const point = await checkPay()
    
	}, []);

	return <div>포인트가 업데이트 되었습니다.</div>;
};

export default CompletePay;
