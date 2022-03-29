import { useEffect, useState } from 'react';
import {
	TypeOfWork,
	TypeOfWorks,
} from '../../../../../../common/project_types';
import Database from '../../../../../../services/database';
import styles from './work_fix_selection_size.module.css';
import { myLogics } from '../../../../../../common/project_logics';
import WorkFixSelectionBundleContainerSize from '../work_fix_selection_bundle_container_size/work_fix_selection_bundle_container_size';

type WorkFixSelectionSizeProps = {
	dataPathValue: string;
	databaseService: Database;
	passSelectedWorkToUpper: (workNumber: number, work: TypeOfWork) => void;
	exhibitionWorksOnClickArray: number[];
};

const WorkFixSelectionSize = ({
	dataPathValue,
	exhibitionWorksOnClickArray,
	databaseService,
	passSelectedWorkToUpper,
}: WorkFixSelectionSizeProps) => {
	const [works, setWorks] = useState<TypeOfWorks | null>(null);

	const [checkSmallerOrLarger, setCheckSmallerOrLarger] = useState<
		boolean | undefined
	>(undefined);
	useEffect(() => {
		if (dataPathValue === 'smaller') {
			setCheckSmallerOrLarger(true);
		} else {
			setCheckSmallerOrLarger(false);
		}
	}, [dataPathValue]);

	useEffect(() => {
		const yes = databaseService.getWorkData((data) => {
			setWorks(data);
		});
		return () => yes();
	}, []);

	const workSizeBigToSmall = myLogics.returnWorkSizeBigToSmallArray(works);
	const workSizeSmallToBig = myLogics.returnWorkSizeSmallToBigArray(works);

	return (
		<div className={styles.work_size_container}>
			<div className={`${styles.work_bundle}`}>
				{checkSmallerOrLarger ? (
					<>
						{checkSmallerOrLarger && (
							<WorkFixSelectionBundleContainerSize
								exhibitionWorksOnClickArray={exhibitionWorksOnClickArray}
								passSelectedWorkToUpper={passSelectedWorkToUpper}
								works={workSizeSmallToBig!}
							/>
						)}
					</>
				) : (
					<>
						{!checkSmallerOrLarger && (
							<WorkFixSelectionBundleContainerSize
								exhibitionWorksOnClickArray={exhibitionWorksOnClickArray}
								passSelectedWorkToUpper={passSelectedWorkToUpper}
								works={workSizeBigToSmall!}
							/>
						)}
					</>
				)}
			</div>
		</div>
	);
};
export default WorkFixSelectionSize;
