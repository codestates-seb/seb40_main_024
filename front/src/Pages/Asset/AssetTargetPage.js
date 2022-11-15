import styled from 'styled-components';
import { AssetBdata } from '../../Component/Asset/Asset_B_Data';
import AssetSetting from '../../Component/Asset/AssetSetting';

const PageContain = styled.div`
  display: flex;
  flex-direction: row;
  /* display: inline-block; */
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const ChartContain = styled.div`
  box-sizing: border-box;
  width: 700px;
  height: 300px;
`;

const BoxContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-block;
  align-items: center;
  box-sizing: border-box;
  width: 960px;
  height: 800px;
`;

const AssetTargetPage = () => {
  return (
    <>
      <PageContain>
        <ChartContain>
          <AssetBdata />
        </ChartContain>
        <BoxContain>
          <AssetSetting />
          <AssetSetting />
          <AssetSetting />
          <AssetSetting />
        </BoxContain>
      </PageContain>
    </>
  );
};

export default AssetTargetPage;
